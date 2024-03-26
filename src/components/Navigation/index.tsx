import React, { useMemo } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthenticatedStack } from "../AuthenticatedStack";
import { AnonymousStack } from "../AnonymousStack";

export function Navigation() {
  // here i would check is the user is authenticated or not, and based on that I would return the desired Stack navigation
  const CURRENT_STACK = useMemo(() => {
    const isAuthenticated = true;
    return isAuthenticated ? AuthenticatedStack : AnonymousStack;
  }, []);

  return (
    <NavigationContainer>
      <CURRENT_STACK />
    </NavigationContainer>
  );
}
