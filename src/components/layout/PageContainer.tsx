import type { ReactNode } from "react";
export function PageContainer({children,className=""}:{children:ReactNode;className?:string}){return <div className={"container "+className}>{children}</div>}
