import { useRef } from "react";

export const useCountRenders = (componentName: string) => {
	const count = useRef(0);
	console.log(`${componentName} renders => ${count} times.`);
};
