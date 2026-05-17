"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";

interface TopBarActions {
	left?: ReactNode;
	right?: ReactNode;
}

const TopBarContext = createContext<{
	actions: TopBarActions;
	setActions: (actions: TopBarActions) => void;
}>({
	actions: {},
	setActions: () => {},
});

export function TopBarProvider({ children }: { children: ReactNode }) {
	const [actions, setActionsState] = useState<TopBarActions>({});

	const setActions = useCallback((newActions: TopBarActions) => {
		setActionsState(newActions);
	}, []);

	return (
		<TopBarContext.Provider value={{ actions, setActions }}>
			{children}
		</TopBarContext.Provider>
	);
}

export function useTopBarActions() {
	return useContext(TopBarContext);
}