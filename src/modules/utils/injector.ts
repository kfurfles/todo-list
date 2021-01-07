import container from '../../container'

export default function<T>(instance: string){
    return container.resolve<T>(instance)
}
