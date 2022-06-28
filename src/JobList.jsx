import React from "react";
import JobItems from "./JobItems";
import NoJob from "./NoJob/NoJob";

const JobList = ({ jobs, handleOnDelete }) => {
  const onDelete = (id) => {
    handleOnDelete(id);
  };
  let Content = <NoJob />;

  if (jobs.length > 0) {
    Content = jobs.map((job, index) => (
      <JobItems handleOnDelete={onDelete} job={job} key={index} index={index} />
    ));
  }
  return <>{Content}</>;
};

export default JobList;
