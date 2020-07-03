import { ComponentClass, useState, useEffect, Props, Component } from "react";
import React from "react";

function getDisplayName(WrappedComponent: ComponentClass)
{
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

interface IAsyncCallState<T>
{
    loading?: boolean;
    error?: Error;
    content?: T;
}

type PromiseFunction<T = any> = (...args: any[]) => Promise<T>;

export function useAsyncCall<T = any>(promiseFn: PromiseFunction<T>)
{
    const [{ loading, error, content }, setState] = useState({} as IAsyncCallState<T>);

    useEffect(() =>
    {
        setState({ loading: true });
        promiseFn().then(
            x => setState({ content: x, loading: false }),
            e => setState({ error: e, loading: false }));
    }, [promiseFn]);

    return { loading, error, content };
}

export interface IAsyncContentWrapperProps {
    loadingComponent?: Component;
    errorComponent?: Component;
    noContentComponent?: Component;
}

export interface IAsyncContentProps<T> {
    content?: T;
}

export function withAsyncContent<T = any>(WrappedComponent: ComponentClass<IAsyncContentProps<T>>, promiseFn: PromiseFunction<T>): Component<IAsyncContentProps<T>> | JSX.Element
{
    const WithAsyncContent = (props: IAsyncContentWrapperProps): ComponentClass<IAsyncContentProps<T>> =>
    {
        const { loading, error, content } = useAsyncCall(promiseFn);
        const loadingComponent = loading && (props.loadingComponent || <div>Loading...</div>);
        const errorComponent = error && (props.errorComponent || <div style={{ color: 'red' }}>{error.message}</div>);
        const noContentComponent = !content && (props.noContentComponent || <div>There's no content</div>);
        const contentComponent = <WrappedComponent content={content} {...props} />;

        return (loadingComponent || errorComponent || noContentComponent || contentComponent) as ComponentClass<IAsyncContentProps<T>>;
    };

    WithAsyncContent.displayName = `WithAsyncContent(${getDisplayName(WrappedComponent)})`;
    return WithAsyncContent;
}
