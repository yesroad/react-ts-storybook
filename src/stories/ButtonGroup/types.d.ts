export interface ButtonGroupProps {
  /** 버튼을 보여줄 방향 */
  direction: 'row' | 'column';
  /** 버튼을 우측 정렬. */
  rightAlign?: boolean;
  /** 버튼사이의 간격을 설정 */
  gap: number | string;
  /** 버튼 그룹에서 보여줄 버튼들 */
  children: React.ReactNode;
  /* 스타일 커스터마이징 */
  className?: string;
};