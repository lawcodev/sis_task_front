import React from "react";
import TaskManager from "../components/template/task/manager";
import MainLayout from "./main-layout";

export default function TaskPage() {
  return (
    <MainLayout>
      <TaskManager />
    </MainLayout>
  );
}
