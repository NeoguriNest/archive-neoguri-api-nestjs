/**
 * 인증 시 제공하는 권한의 종류
 *
 * @var ADMINISTARTOR  - 앱 내 최고 관리자 권한
 * @var MANAGER        - 앱 관리자 권한
 * @var DEVELOPER      - 개발자 기능 권한
 * @var USER           - 일반 유저 권한
 */
export enum Roles {
    ADMINISTRATOR = 'administrator',
    DEVELOPER = 'developer',
    MANAGER = 'manager',
    USER = 'user',
}