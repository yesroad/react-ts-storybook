export interface ButtonProps {
  /** 버튼 안의 내용 */
  children: React.ReactNode;
  /** 버튼 테마 */
  theme: 'primary' | 'secondary' | 'tertiary';
  /** 버튼 사이즈 */
  size?: 'small' | 'medium' | 'large';
  /** 클릭했을 때 호출할 함수 */
  onClick?: () => void;
  /** 버튼을 비활성화 */
  disabled?: boolean;
}
