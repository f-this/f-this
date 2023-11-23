import * as React from "react"
import Svg, { Path } from "react-native-svg"
import Colors from "../constants/Colors"

function Logo(props: any) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 449"
            fill="none"
            preserveAspectRatio="true"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M28.897 274.229L0 448.319h121.693l28.892-175.124h174.223l16.633-98.07h-3.913l-308.63 99.104zm30.28-182.417H374.02L389.594 0H74.417l-15.24 91.812zm317.357 70.787l220.447-70.787H386.792l44.128-59.414 56.033 44.657L493.081 0h70.04l-20.137 77.055 71.79-44.657 24.515 61.294-75.293 32.398 64.786 32.398-45.525 61.293-56.032-44.656-6.127 77.054h-70.039l20.136-77.054-71.79 44.656-22.871-57.182z"
                fill={Colors.white}
            />
        </Svg>
    )
}

export default Logo
