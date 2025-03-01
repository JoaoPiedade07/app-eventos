import { Feather } from "@expo/vector-icons";

export const icon = {
    home: ( props: any ) => ( 
      <Feather name = 'home' size = { 24 } { ...props } /> 
    ),
    list: ( props: any ) => ( 
      <Feather name = 'list' size = { 24 } { ...props } /> 
    ),
    profile: ( props: any ) => ( 
      <Feather name = 'user' size = { 24 } { ...props } /> 
    ),
}