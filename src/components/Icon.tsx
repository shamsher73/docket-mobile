import React, { Suspense, useEffect } from 'react';
import { Text, View } from 'react-native';

const Icon = (props:any) => {
    const svg = props.iconName;

    // const {svg, setSvg} = React.useState("Google");
    // useEffect(() => {
    //     setSvg(props.iconName);
    // }, [props.iconName]);
    
    // setSvg(props.iconName);
    // const iconName = props.iconName;
    // console.log(iconName);
    // import BellIcon from './../../assets/images/bell.svg';
    // const importPath = `./../../assets/images/${svg}.svg`;
    // console.log("import path is",importPath);
    // const name= "Google"
    //   console.log(props.path);

    const ImportedIcon = React.lazy(() => import("./../../assets/images/"+"bell"+".svg"));
    return (
        <View>
            <Suspense fallback={<View><Text>Loading...</Text></View>}>
                <ImportedIcon />
            </Suspense>
            {/* {
                import("./math").then(math => {
                    console.log(math.add(16, 26));
                  });
            } */}
       
        </View>
        
    )
}

export default Icon;