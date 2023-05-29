export class RolePermission {
    roleName: string = '';
    permissionName: string = '';

    public constructor(obj?: any) {
        if (obj) {
            this.roleName = obj.roleName;
            this.permissionName = obj.permissionName;
        }
    }
}
