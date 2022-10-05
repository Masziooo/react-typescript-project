export const toggleState = (
  setState:
    | React.Dispatch<React.SetStateAction<boolean>>
    | React.Dispatch<React.SetStateAction<boolean | null>>
): void => setState((currentState: any) => !currentState);
