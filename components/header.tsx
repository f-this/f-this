import React from "react";
import { View, SafeAreaView, Text, StyleSheet, TouchableOpacity } from "react-native";
import Svg, { Path } from "react-native-svg";
import Colors from "../constants/Colors";
import Logo from "./logo";
import textStyle from "../constants/textStyles";
import ProgressBar from "./progressBar";
import { NavArrowLeft } from "iconoir-react-native";

interface HeaderProps {
  color?: keyof typeof Colors;
  showLogo?: boolean;
  showProgress?: boolean;
  currentStep?: number;
  totalSteps?: number;
  title?: string;
  subtitle?: string;
  body?: string;
  action?: JSX.Element;
  onBack?: () => void;
  onCancel?: () => void;
  triangleHeight?: number;
}

const Header = (props: HeaderProps = {}) => {
  return (
    <View>
      <SafeAreaView
        style={{
          backgroundColor: Colors[props.color ?? "blue"],
          paddingHorizontal: 34,
        }}
      >
        {props.onBack ? (
          <TouchableOpacity onPress={props.onBack}>
            <NavArrowLeft width={24} height={24} strokeWidth={4} color={Colors.white} style={{
              paddingHorizontal: 40,
              marginTop: 46,
              marginBottom: 10,
            }} />
          </TouchableOpacity>
        ) : <View style={{
          paddingHorizontal: 34,
          marginTop: 80,

        }} />}
        {/*Row that contains the logo and the progress bar*/}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 34,
            marginTop: 20,
            marginBottom: 20,
          }}
        >
          {/*If onCancel is not null, show the cancel button*/}
          {/*If  showLogo is true, show the logo*/}
          {props.showLogo && (
            <Logo
              style={{
                height: 36,
                width: 51,
              }}
              color={Colors.white}
            />
          )}
          {/*If showProgress is true, show the progress bar*/}
          {props.showProgress && props.currentStep && props.totalSteps && (
            <ProgressBar fillPercentage={(props.currentStep / props.totalSteps) * 100} style={{ marginLeft: 30 }} />
          )}
        </View>
        {/*Column that contains the title and subtitle*/}
        <View
          style={{
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "space-between",
            paddingHorizontal: 34,
          }}
        >
          {/*If title is not null, show the title*/}
          {props.title && <Text style={textStyle.heading}>{props.title}</Text>}
          {/*If subtitle is not null, show the subtitle*/}
          {props.subtitle && (
            <Text style={textStyle.subtitle}>{props.subtitle}</Text>
          )}
          {/*If body is not null, show the body*/}
          {props.body && <Text style={textStyle.body}>{props.body}</Text>}
          {/*If action is not null, show the action*/}
          {props.action && props.action}
        </View>
      </SafeAreaView>
      <EndTriangle color={Colors[props.color ?? "blue"]} height={props.triangleHeight ?? 150} />
    </View>
  );
};

function EndTriangle(props: any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      style={{
        // Should fill the width of the screen
        width: "100%",
        height: `${props.triangleHeight ?? 150}px`,
      }}
      viewBox="0 0 389 155"
      fill="none"
      preserveAspectRatio="none"
      {...props}
    >
      <Path d="M389 0L0 155V0h389z" fill={props.color} />
    </Svg>
  );
}

export default Header;
export { EndTriangle }
