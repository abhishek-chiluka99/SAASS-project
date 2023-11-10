import { cn } from "@/lib/utils"
import { ReactNode } from "react"

// This part of component we used for to keep the every page in good and dfault format.
const MaxWidthWrapper = ({

    // className and children act as props when we use this component to pass the values.
    className,
    children,
}: {
    className?: string
    children: ReactNode
}) => {
    return(
    // the css format then get applies to that call paged.
    // the "cn" function improt from utils help to merge the CSS with the default plus particular page CSS send to it
    <div className={cn('mx-auto w-full max-w-screen-xl px-2.5 md:px-20', className)}>
        {children}
    </div>
    )
}

export default MaxWidthWrapper