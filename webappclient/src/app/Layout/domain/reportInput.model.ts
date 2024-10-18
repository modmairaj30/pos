export class ReportInput {
    
    constructor(
        public fromDate?: Date,
        public toDate?: Date,
        public fileType?: string,
        public reportName?: any,
        public sandType?: string,
        public month?: Date,
       public reportType?: any,
        public locationId?: any,
        public partyId?: any,
        public authorId?: any,
        public reportId?: any,
        public filterBY?:any, 
        public Units?:string,
        public  jasper?:string,
        public  jasperName?:string,
        public  enableToUserId?:string,
        public  enableToRoleId?:string,
        public id?: number,

    ) { }
}
