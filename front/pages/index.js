import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AppLayout from "../components/AppLayout";
import Search from "../components/Search";

function Home() {
  const { searchList } = useSelector((state) => state.search);
  console.log(searchList);
  return (
    <AppLayout>
      <Search />
    </AppLayout>
  );
}

export default Home;
