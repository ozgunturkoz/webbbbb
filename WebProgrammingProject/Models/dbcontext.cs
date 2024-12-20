using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using WebProgrammingProject.Models;

namespace airportDbProject.Models
{
    public class airportDb : DbContext
    {
        public airportDb() : base("name=airport")
        {

        }

        public DbSet<Airport> Airports { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Airport>().ToTable("Airport");
            modelBuilder.Entity<Flight_Details>().ToTable("Flight_Details");

            // Diğer konfigürasyonlar...

            base.OnModelCreating(modelBuilder);
        }





        public DbSet<Flight_Details> Flight_Detailss { get; set; }
        public DbSet<Flight_Service> Flight_Services { get; set; }
        public DbSet<Passenger> Passengers { get; set; }
        public DbSet<Payment_Status> Payment_Statuss { get; set; }
        public DbSet<Reservation> Reservations { get; set; }
        public DbSet<Seat_Details> Seat_Detailss { get; set; }
        public DbSet<Users> Userss { get; set; }
    }
}
