import { displayFlex, styled } from '@/styles';

export const StyledShortcutsModal = styled.div(({ theme }) => ({
  width: '288px',
  height: '74vh',
  paddingBottom: '28px',
  backgroundColor: theme.colors.popoverBackground,
  boxShadow: theme.shadow.popover,
  borderRadius: `${theme.radius.popover} 0 ${theme.radius.popover} ${theme.radius.popover}`,
  color: theme.colors.popoverColor,
  overflow: 'auto',
  boxRadius: '10px',
  position: 'fixed',
  right: '12px',
  top: '0',
  bottom: '0',
  margin: 'auto',
  zIndex: theme.zIndex.modal,
}));
export const StyledTitle = styled.div(({ theme }) => ({
  color: theme.colors.textColor,
  fontWeight: '500',
  fontSize: theme.font.sm,
  height: '44px',
  ...displayFlex('center', 'center'),
  svg: {
    width: '20px',
    marginRight: '14px',
    color: theme.colors.primaryColor,
  },
}));
export const StyledSubTitle = styled.div(({ theme }) => ({
  color: theme.colors.popoverColor,
  fontWeight: '500',
  fontSize: theme.font.sm,
  height: '34px',
  lineHeight: '36px',
  marginTop: '28px',
  padding: '0 16px',
}));
export const StyledModalHeader = styled.div(({ theme }) => ({
  ...displayFlex('space-between', 'center'),
  paddingTop: '8px 4px 0 4px',
  width: '100%',
  padding: '8px 16px 0 16px',
  position: 'sticky',
  left: '0',
  top: '0',
  background: 'var(--affine-popover-background)',

  transition: 'background-color 0.5s',
}));

export const StyledListItem = styled.div(({ theme }) => ({
  height: '34px',
  ...displayFlex('space-between', 'center'),
  fontSize: theme.font.sm,
  padding: '0 16px',
}));

export const CloseButton = styled('div')(({ theme }) => {
  return {
    width: '24px',
    height: '24px',
    borderRadius: '5px',
    color: theme.colors.iconColor,
    cursor: 'pointer',
    ...displayFlex('center', 'center'),
    svg: {
      width: '15px',
      height: '15px',
    },
    ':hover': {
      background: theme.colors.hoverBackground,
      color: theme.colors.primaryColor,
    },
  };
});
