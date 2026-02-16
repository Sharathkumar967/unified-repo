"use client";

const SubjectTeacherPrimaryLayout = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Subject Teacher Primary Layout</h1>

      <div style={{ marginTop: "20px" }}>{children}</div>
    </div>
  );
};

export default SubjectTeacherPrimaryLayout;
