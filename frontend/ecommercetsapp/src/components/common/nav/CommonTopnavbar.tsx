import { Suspense } from "react";
import LoadingDialog from "../LoadingDialog";
import RowTwoNav from "./RowTwoNav";
import RowThreeNav from "./RowThreeNav";
import RowOneNav from "./RowOneNav";

const CommonTopnavbar = () => {
  return (
    <Suspense fallback={<LoadingDialog />}>
      <RowOneNav />

      <RowTwoNav />

      <RowThreeNav />
    </Suspense>
  );
};

export default CommonTopnavbar;
