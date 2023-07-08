import { Suspense } from "react";
import CommonTopnavbar from "./CommonTopnavbar";
import LoadingDialog from "../LoadingDialog";

const CommonNavbar = ({ children }: { children: any }) => {
  return (
    <Suspense fallback={<LoadingDialog />}>
      <div className="sticky top-0 z-10 bg-white">
        <CommonTopnavbar />
      </div>
      <div className="bg-slate-50">{children}</div>
    </Suspense>
  );
};

export default CommonNavbar;
