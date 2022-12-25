import React, { useState, useEffect, cloneElement } from 'react';
import {
  StyledAnimateRadioContainer,
  StyledMiddleLine,
  StyledRadioItem,
  StyledLabel,
  StyledIcon,
} from './style';
import type {
  RadioItemStatus,
  AnimateRadioProps,
  AnimateRadioItemProps,
} from './type';
import { useTheme } from '@/styles';
import { EdgelessIcon, PaperIcon } from './icons';
import { useEditor } from '@/components/editor-provider';

const PaperItem = ({ active }: { active?: boolean }) => {
  const {
    theme: {
      colors: { iconColor, primaryColor },
    },
  } = useTheme();

  return <PaperIcon style={{ color: active ? primaryColor : iconColor }} />;
};

const EdgelessItem = ({ active }: { active?: boolean }) => {
  const {
    theme: {
      colors: { iconColor, primaryColor },
    },
  } = useTheme();

  return <EdgelessIcon style={{ color: active ? primaryColor : iconColor }} />;
};

const AnimateRadioItem = ({
  active,
  status,
  icon: propsIcon,
  label,
  isLeft,
  ...props
}: AnimateRadioItemProps) => {
  const icon = (
    <StyledIcon shrink={status === 'shrink'} isLeft={isLeft}>
      {cloneElement(propsIcon, {
        active,
      })}
    </StyledIcon>
  );
  return (
    <StyledRadioItem title={label} active={active} status={status} {...props}>
      {isLeft ? icon : null}
      <StyledLabel shrink={status !== 'stretch'} isLeft={isLeft}>
        {label}
      </StyledLabel>
      {isLeft ? null : icon}
    </StyledRadioItem>
  );
};

export const EditorModeSwitch = ({
  isHover,
  style = {},
}: AnimateRadioProps) => {
  const { mode: themeMode } = useTheme();
  const { mode, setMode } = useEditor();
  const modifyRadioItemStatus = (): RadioItemStatus => {
    return {
      left: isHover
        ? mode === 'page'
          ? 'stretch'
          : 'normal'
        : mode === 'page'
        ? 'shrink'
        : 'hidden',
      right: isHover
        ? mode === 'edgeless'
          ? 'stretch'
          : 'normal'
        : mode === 'edgeless'
        ? 'shrink'
        : 'hidden',
    };
  };
  const [radioItemStatus, setRadioItemStatus] = useState<RadioItemStatus>(
    modifyRadioItemStatus
  );

  useEffect(() => {
    setRadioItemStatus(modifyRadioItemStatus());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isHover, mode]);

  return (
    <StyledAnimateRadioContainer
      data-testid="editor-mode-switcher"
      shrink={!isHover}
      style={style}
    >
      <AnimateRadioItem
        isLeft={true}
        label="Paper"
        icon={<PaperItem />}
        active={mode === 'page'}
        status={radioItemStatus.left}
        onClick={() => {
          setMode('page');
        }}
        onMouseEnter={() => {
          setRadioItemStatus({
            right: 'normal',
            left: 'stretch',
          });
        }}
        onMouseLeave={() => {
          setRadioItemStatus(modifyRadioItemStatus());
        }}
      />
      <StyledMiddleLine hidden={!isHover} dark={themeMode === 'dark'} />
      <AnimateRadioItem
        isLeft={false}
        label="Edgeless"
        icon={<EdgelessItem />}
        active={mode === 'edgeless'}
        status={radioItemStatus.right}
        onClick={() => {
          setMode('edgeless');
        }}
        onMouseEnter={() => {
          setRadioItemStatus({
            left: 'normal',
            right: 'stretch',
          });
        }}
        onMouseLeave={() => {
          setRadioItemStatus(modifyRadioItemStatus());
        }}
      />
    </StyledAnimateRadioContainer>
  );
};

export default EditorModeSwitch;
