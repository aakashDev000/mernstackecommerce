import { Suspense } from "react";
import CommonTopnavbar from "./CommonTopnavbar";
import LoadingDialog from "../LoadingDialog";

const CommonNavbar = ({ children }: { children: any }) => {
  return (
    <Suspense fallback={<LoadingDialog />}>
      <CommonTopnavbar />
      <div className="bg-slate-100">{children}</div>
    </Suspense>
  );
};

export default CommonNavbar;
