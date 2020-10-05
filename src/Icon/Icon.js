import React, { useState, useEffect, useRef } from "react";

const IconLoader = ({ name, ...rest }) => {
  const ImportedIconRef = useRef(null);
  const [loading, setLoading] = useState(false);

  console.log(loading);

  useEffect(() => {
    setLoading(true);
    const importIcon = async () => {
      try {
        const svgComponent = await import(
          `!!@svgr/webpack?-svgo,+titleProp,+ref!./assets/${name}.svg`
        );
        ImportedIconRef.current = svgComponent?.default;
      } catch (error) {
        throw error;
      } finally {
        setLoading(false);
      }
    };
    importIcon();
  }, [name]);

  if (!loading && ImportedIconRef.current) {
    const { current: ImportedIcon } = ImportedIconRef;
    return <ImportedIcon {...rest} />;
  }

  return null;
};

const supportMap = [
  "activity",
  "anchor",
  "check",
  "edit",
  "eye",
  "file",
  "grid",
  "hash",
];

const Icon = (props) => {
  if (props.name && supportMap.includes(props.name)) {
    return <IconLoader {...props} />;
  } else {
    return <></>;
  }
};

export default Icon;
