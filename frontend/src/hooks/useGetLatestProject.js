import { useState, useEffect } from "react";

import getLatestProject from "../api/getLatestProject";

export default function useGetLatestProject() {
    const [project, setProject] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getLatestProject().then(setProject);
        setIsLoading(false);
    }, []);

    return { project, isLoading };
}
