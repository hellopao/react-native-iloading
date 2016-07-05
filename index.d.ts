declare module "react-native-iloading" {
    interface ILoadingOpts {

    }

    class Loading {
        new: (opts?: ILoadingOpts) => void;

        show: (duration?: number) => void;

        hide: () => void;
    }

    export = Loading;
}