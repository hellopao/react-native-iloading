# react-native-iloading

## install 

```bash
npm install react-native-iloading
```

## usage

```javascript
import Loading from "react-native-iloading";

class App extends React.Component {

    componentDidMount() {
        const loading = new Loading();
        loading.show();

        setTimeout(() => {
            loading.hide();
        },3000);
    }

    render() {
        return (
            <View>
            </View>
        )
    }
}
```