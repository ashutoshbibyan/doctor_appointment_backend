export class Hours {
    public startAt: string;
    public closeAt: string;



    public equal( hours: Hours ): boolean {

        let result: boolean = false;

        if ( ( this.startAt == hours.startAt ) && ( this.closeAt == hours.closeAt ) ) {
            result = true;
        }
        return result;
    }
}