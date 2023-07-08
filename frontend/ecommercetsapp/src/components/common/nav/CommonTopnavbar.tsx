import { Suspense } from "react";
import LoadingDialog from "../LoadingDialog";
import RowTwoNav from "./RowTwoNav";
import RowThreeNav from "./RowThreeNav";
import RowOneNav from "./RowOneNav";

const CommonTopnavbar = () => {
  return (
    <Suspense fallback={<LoadingDialog />}>
      <RowOneNav />

      <div className="sticky top-0 z-10 bg-white">
        <RowTwoNav />

        <RowThreeNav />
      </div>
    </Suspense>
  );
};

export default CommonTopnavbar;
