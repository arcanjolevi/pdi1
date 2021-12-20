import {
  Button,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  DrawerBody,
  Input,
  DrawerHeader,
  DrawerCloseButton,
  DrawerFooter,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Text,
  Box,
  Switch,
  Select,
  Center,
} from "@chakra-ui/react";
import React, { useCallback, useState } from "react";
import toast from "react-hot-toast";

export function Rightbar({
  isOpen,
  onClose,
  btnRef,
  currentEffect,
  applyEffectWithParams,
}) {
  const [param0, setParam0] = useState(-1);
  const [param1, setParam1] = useState(-1);
  const [param2, setParam2] = useState(-1);
  const [param3, setParam3] = useState(-1);

  function handleApply() {
    const n = currentEffect.params.length;
    let count = param0 === -1 ? 1 : 0;
    count = count + (param1 === -1 ? 1 : 0);
    count = count + (param2 === -1 ? 1 : 0);
    count = count + (param3 === -1 ? 1 : 0);
    if (4 - count !== n) {
      toast.error("Preencha todos os parâmetros");
      return;
    }

    let sendParams = {};

    if (param0 !== -1) {
      sendParams.param0 = param0;
    }

    if (param1 !== -1) {
      sendParams.param1 = param1;
    }

    if (param2 !== -1) {
      sendParams.param2 = param2;
    }

    if (param3 !== -1) {
      sendParams.param3 = param3;
    }

    applyEffectWithParams(sendParams);

    setParam0(-1);
    setParam1(-1);
    setParam2(-1);
    setParam3(-1);
  }

  const getOnChange = useCallback((i) => {
    if (i == 0) {
      return setParam0;
    } else if (i == 1) {
      return setParam1;
    } else if (i == 2) {
      return setParam2;
    } else {
      return setParam3;
    }
  });

  const getParam = useCallback((i) => {
    if (i == 0) {
      return param0;
    } else if (i == 1) {
      return param1;
    } else if (i == 2) {
      return param2;
    } else {
      return param3;
    }
  });
  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Parâmetros</DrawerHeader>

          <DrawerBody>
            {currentEffect &&
              currentEffect.params.map((p, i) => {
                return (
                  <Param
                    options={p.options}
                    type={p.type}
                    title={p.title}
                    range0={p.range0}
                    range1={p.range1}
                    onChange={getOnChange(i)}
                    slider={getParam(i)}
                    defaultValue={p.default}
                    step={p.step}
                  />
                );
              })}
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={handleApply} colorScheme="purple">
              Aplicar
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

const Param = ({
  options,
  type,
  title,
  range0,
  range1,
  onChange,
  slider,
  defaultValue,
  step,
}) => {
  if (type === "selector") {
    return (
      <Box marginBottom="15px">
        <Text>{title}</Text>
        <Select
          onChange={(v) => onChange(v.target.value)}
          placeholder="Selecione uma opção"
        >
          {options.map((o) => (
            <option key={o.title} value={o.value}>
              {o.title}
            </option>
          ))}
        </Select>
      </Box>
    );
  }

  if (type === "spinner") {
    return (
      <Box marginBottom="15px">
        <Text>{title}</Text>
        <Slider
          aria-label="slider-ex-1"
          defaultValue={defaultValue}
          onChange={onChange}
          min={range0}
          max={range1}
          step={step}
          colorScheme="purple"
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
        <Center>
          <Text>{slider || defaultValue}</Text>
        </Center>
      </Box>
    );
  }

  if (type === "switch")
    return (
      <Box marginBottom="15px">
        <Text>{title}</Text>
        <Switch onChange={onChange} id="email-alerts" />
      </Box>
    );

  return (
    <Box marginBottom="15px">
      <Text>{title}</Text>
      <Input onChange={onChange} placeholder="Type here..." />
    </Box>
  );
};
