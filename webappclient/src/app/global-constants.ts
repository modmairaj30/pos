import { UserMaster } from "./layout/domain";

export class GlobalConstants {
   
    public static siteTitle: string = "MAHBOOB STORE";
    public static  active = 1;
    public static location: string="";
    public static userDetail: any;
    public static userName: string="";
    public static  userId:any;
    public static  pic:any;
    
    public static searchs:any[] = [
        { field: 'EQUAL', header: 'Equal' },
        { field: 'NOT_EQUAL', header: 'Not Equal' },
        { field: 'MATCH', header: 'Match' },
        { field: 'MATCH_START', header: 'Match Start' },
        { field: 'MATCH_END', header: 'Match End' },
        { field: 'NOT_IN', header: 'Not In' },
        { field: 'IN', header: 'In' },
        { field: 'GREATER_THAN', header: 'Greater Than' },
        { field: 'LESS_THAN', header: 'Less Than' },
        { field: 'GREATER_THAN_EQUAL', header: 'Greater Than equal' },
        { field: 'LESS_THAN_EQUAL', header: 'Less Than Equal' },
        
        
        
       
      ];
    
    
}

