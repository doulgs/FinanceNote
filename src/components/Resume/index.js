import React from "react";
import ResumeItem from "../ResumeItem";
import * as C from "./styles";
import {
  BsArrowUpCircle,
  BsArrowDownCircle,
  BsCurrencyDollar,
} from "react-icons/bs";

const Resume = ({ income, expense, total }) => {
  return (
    <C.Container>
      <ResumeItem title="Entradas" Icon={BsArrowUpCircle} value={income} />
      <ResumeItem title="Saindas" Icon={BsArrowDownCircle} value={expense} />
      <ResumeItem title="Total" Icon={BsCurrencyDollar} value={total} />
    </C.Container>
  );
};

export default Resume;
