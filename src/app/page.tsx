"use client";

import { useState } from "react";
import { HomePage } from "../HomePage";
import { FlightsPage } from "../FlightsPage";
import { HotelsPage } from "../HotelsPage";
import { HolidaysPage } from "../HolidaysPage";
import { VisaPage } from "../VisaPage";
import { Header } from "../Header";
import { Footer } from "../Footer";

type PageType = "home" | "flights" | "hotels" | "holidays" | "visa";

export default function Home() {
  const [currentPage, setCurrentPage] = useState<PageType>("home");

  const handleNavigate = (
    page: "home" | "flights" | "hotels" | "holidays" | "visa"
  ) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header onNavigate={handleNavigate} />

      <main>
        {currentPage === "home" && (
          <HomePage
            onSearchFlights={() => setCurrentPage("flights")}
            onNavigate={handleNavigate}
          />
        )}
        {currentPage === "flights" && (
          <FlightsPage
            onBookFlight={(flight) => console.log("Booking flight:", flight)}
          />
        )}
        {currentPage === "hotels" && (
          <HotelsPage
            onHotelSelect={(hotel) => console.log("Booking hotel:", hotel)}
          />
        )}
        {currentPage === "holidays" && (
          <HolidaysPage
            onPackageSelect={(pkg) => console.log("Booking package:", pkg)}
          />
        )}
        {currentPage === "visa" && (
          <VisaPage
            onVisaSelect={(visa) => console.log("Applying for visa:", visa)}
          />
        )}
      </main>

      <Footer />
    </div>
  );
}
