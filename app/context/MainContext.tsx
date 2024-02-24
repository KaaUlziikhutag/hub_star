import React, { useEffect, useState } from "react";
import { CurrentContextType } from "./contextType";
import axiosClient from "@/services/axiosInstance";

export const MainContext = React.createContext<CurrentContextType | null>(null);

export const MainContextComp = (props: any) => {
  const client = axiosClient();
  const [username, setUsername] = useState<any>("xxx");
  const [directionLoading, setDirectionLoading] = useState<boolean>(true);

  const [mainDirection, setMainDirection] = useState<[]>([]);
  const [direction, setDirection] = useState<[]>([]);
  const [subDirection, setSubDirection] = useState<[]>([]);

  const getMainDirection = () => {
    client
      .get("reference/main-direction")
      .then((response) => {
        // console.log("getMain Direction response", response);
        const result = response.data?.response?.map((item: any) => {
          return {
            ...item,
            children: direction.filter(
              (el: any) => el.mainDirectionId === item.id,
            ),
          };
        });

        setMainDirection(result);
      })
      .then(() => {
        setDirectionLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching :", error);
      });
  };
  const getDirection = () => {
    client
      .get("reference/main-direction/direction")
      .then((response) => {
        // console.log("get Direction response", response);
        const result = response.data?.response?.map((item: any) => {
          return {
            ...item,
            sub_children: subDirection.filter(
              (el: any) => el.directionId === item.id,
            ),
          };
        });

        // console.log("get Direction result ===>", result);
        setDirection(result);
      })
      .catch((error) => {
        console.error("Error fetching :", error);
      });
  };
  const getSubDirection = () => {
    client
      .get("reference/main-direction/direction/sub-direction")
      .then((response) => {
        // console.log("getSubDirection response", response);
        setSubDirection(response.data.response);
      })
      .catch((error) => {
        console.error("Error fetching :", error);
      });
  };
  useEffect(() => {
    getSubDirection();
  }, []);

  useEffect(() => {
    getDirection();
  }, [subDirection]);

  useEffect(() => {
    getMainDirection();
  }, [direction]);

  return (
    <MainContext.Provider
      value={{
        username,
        mainDirection,
        direction,
        subDirection,
        directionLoading,
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
};
export default MainContext;
