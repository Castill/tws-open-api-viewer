export declare namespace TWExchange {

    interface Stock {
        getETFRank(): Promise<ETFRank[]>;
        getBrokers(): Promise<Broker[]>;
    }

    interface ETFRank {
        No: string;
        STOCKsSecurityCode: string;
        STOCKsName: string;
        STOCKsNumberofTradingAccounts: string;
        ETFsSecurityCode: string;
        ETFsName: string;
        ETFsNumberofTradingAccounts: string;
    }

    interface Broker {
        Code: string;
        Name: string;
        EstablishmentDate: string;
        Address: string;
        Telphone: string;
    }

}
