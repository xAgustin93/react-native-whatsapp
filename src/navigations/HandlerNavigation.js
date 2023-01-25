import React from "react";
import { AppNavigation } from "./AppNavigation";
import { AuthNavigation } from "./stacks";
import { useAuth } from "../hooks";

export function HandlerNavigation() {
  const { user } = useAuth();

  return user ? <AppNavigation /> : <AuthNavigation />;
}
