namespace WebProgrammingProject.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Initial : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Airports",
                c => new
                    {
                        Airport_ID = c.Int(nullable: false, identity: true),
                        AirportName = c.String(),
                        AirportCity = c.String(),
                        AirportCountry = c.String(),
                    })
                .PrimaryKey(t => t.Airport_ID);
            
            CreateTable(
                "dbo.Flight_Details",
                c => new
                    {
                        Flight_Id = c.Int(nullable: false, identity: true),
                        Source_Airport_ID = c.Int(nullable: false),
                        Destination_Airport_ID = c.Int(nullable: false),
                        Departure_Date_Time = c.DateTime(nullable: false),
                        Arrival_Date_Time = c.DateTime(nullable: false),
                        Source_Name = c.String(),
                        Destination_Name = c.String(),
                })
                .PrimaryKey(t => t.Flight_Id);
            
            CreateTable(
                "dbo.Flight_Service",
                c => new
                    {
                        Service_ID = c.Int(nullable: false, identity: true),
                        Service_Name = c.String(),
                    })
                .PrimaryKey(t => t.Service_ID);
            
            CreateTable(
                "dbo.Passengers",
                c => new
                    {
                        Passenger_ID = c.Int(nullable: false, identity: true),
                        P_FirstName = c.String(nullable: false),
                        P_LastName = c.String(nullable: false),
                        P_BirhtDate = c.String(),
                        P_Email = c.String(),
                        P_PhoneNumber = c.String(),
                        P_Gender = c.String(),
                        P_FrequentFlightNum = c.String(),
                        P_TC = c.String(nullable: false),
                        PNR = c.String(),
                    })
                .PrimaryKey(t => t.Passenger_ID);
            
            CreateTable(
                "dbo.Payment_Status",
                c => new
                    {
                        Payment_ID = c.Int(nullable: false, identity: true),
                        Payment_Status_YN = c.Boolean(nullable: false),
                        Payment_Due_Date = c.DateTime(nullable: false),
                        Payment_Amount = c.Decimal(nullable: false, precision: 18, scale: 2),
                        Reservation_ID = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Payment_ID);
            
            CreateTable(
                "dbo.Reservations",
                c => new
                    {
                        Reservation_ID = c.Int(nullable: false, identity: true),
                        Passenger_ID = c.Int(nullable: false),
                        Seat_ID = c.Int(nullable: false),
                        Date_Of_Reservation = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.Reservation_ID);
            
            CreateTable(
                "dbo.Seat_Details",
                c => new
                    {
                        Seat_ID = c.Int(nullable: false, identity: true),
                        Flight_ID = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Seat_ID);
            
            CreateTable(
                "dbo.Users",
                c => new
                    {
                        UserID = c.Int(nullable: false, identity: true),
                        FName = c.String(nullable: false),
                        LName = c.String(nullable: false),
                        Email = c.String(nullable: false),
                        UserPassword = c.String(nullable: false),
                    })
                .PrimaryKey(t => t.UserID);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Users");
            DropTable("dbo.Seat_Details");
            DropTable("dbo.Reservations");
            DropTable("dbo.Payment_Status");
            DropTable("dbo.Passengers");
            DropTable("dbo.Flight_Service");
            DropTable("dbo.Flight_Details");
            DropTable("dbo.Airports");
        }
    }
}
