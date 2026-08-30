export default function skeletoncard(){
    return (
    <div className="flex flex-col gap-2">
        <div className="h-40 w-full animate-pulse rounded-xl bg-white/10"></div>
        <div className="h-6 w-full animate-pulse rounded-xl bg-white/10"></div>
        <div className="h-6 w-2/3 animate-pulse rounded-xl bg-white/10"></div>
    </div>
    )
}