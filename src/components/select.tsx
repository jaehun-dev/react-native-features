import {createContext, useCallback, useEffect, useId, useMemo, useState} from 'react';
import {Pressable, View} from 'react-native';
import {useContext} from '../utils/useContext';

interface Option {
  value: string;
  label: string;
}

type SelectContextValues = {
  id: string;
  open: boolean;
  selectedOption: Option | null;
  onSelectOption: (option: Option) => void;
  onChangeOpen: (value: boolean) => void;
};

interface SelectProps {
  children: React.ReactNode;
  open: boolean;
  selectedOption: Option | null;
  onChangeOpen: (value: boolean) => void;
  onSelectOption: (option: Option) => void;
}

export const SelectContext = createContext<SelectContextValues>({
  id: '',
  open: false,
  selectedOption: null,
  onSelectOption: (): void => {},
  onChangeOpen: (): void => {},
});

function Select({children, open, selectedOption, onChangeOpen, onSelectOption}: SelectProps) {
  const id = useId();
  const [innerOpen, setInnerOpen] = useState(open);
  const [innerSelectedOption, setInnerSelectedOption] = useState(selectedOption);

  const handleChangeOpen = useCallback(
    (value: boolean) => {
      onChangeOpen(value);
    },
    [onChangeOpen],
  );

  const handleSelectOption = useCallback(
    (option: Option) => {
      onSelectOption(option);
    },
    [onSelectOption],
  );

  useEffect(() => {
    setInnerOpen(open);
  }, [open]);

  useEffect(() => {
    setInnerSelectedOption(selectedOption);
  }, [selectedOption]);

  const contextValue = useMemo(
    () => ({
      id,
      open: innerOpen,
      selectedOption: innerSelectedOption,
      onSelectOption: handleSelectOption,
      onChangeOpen: handleChangeOpen,
    }),
    [id, innerOpen, innerSelectedOption, handleSelectOption, handleChangeOpen],
  );

  return (
    <SelectContext.Provider value={contextValue}>
      <View key={`select-${id}`}>{children}</View>
    </SelectContext.Provider>
  );
}

interface TriggerProps {
  children: React.ReactNode;
}

function Trigger({children}: TriggerProps) {
  const {open, onChangeOpen} = useContext(SelectContext);

  const handlePress = useCallback(() => {
    onChangeOpen(!open);
  }, [onChangeOpen, open]);

  return <Pressable onPress={handlePress}>{children}</Pressable>;
}

function OptionList({children}: {children: React.ReactNode}) {
  const {id, open} = useContext(SelectContext);

  if (!open) {
    return null;
  }

  return <View key={`optionlist-${id}`}>{children}</View>;
}

interface OptionProps {
  children: React.ReactNode;
  value: string;
  label: string;
}

function Option({children, value, label}: OptionProps) {
  const {onSelectOption} = useContext(SelectContext);

  const handlePress = () => {
    const option = {value, label};

    onSelectOption(option);
  };

  return (
    <View key={`option-${value}`}>
      <Pressable onPress={handlePress}>{children}</Pressable>
    </View>
  );
}

Select.Trigger = Trigger;
Select.OptionList = OptionList;
Select.Option = Option;

export default Select;
