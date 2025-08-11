-use command npx create-react-app my-project
-install tailwind css for create-react-app

Planning website
## 📂 Project Structure

```text
src/
├─ app/
│  ├─ App.tsx                 # top-level routes & layout shell
│  ├─ providers/              # context providers mounted once
│  │  ├─ ThemeProvider.tsx
│  │  └─ RouterProvider.tsx
│  └─ layout/
│     ├─ MainLayout.tsx       # header/nav/footer wrappers
│     └─ components/
│        ├─ Header.tsx
│        ├─ Nav.tsx
│        └─ Footer.tsx
│
├─ pages/                     # route-level entry components
│  ├─ Home/
│  │  └─ HomePage.tsx
│  ├─ Explore/
│  │  └─ ExplorePage.tsx
│  ├─ Planner/
│  │  └─ PlannerPage.tsx
│  ├─ Trips/
│  │  ├─ TripsPage.tsx
│  │  └─ TripDetailPage.tsx   # /trips/:tripId
│  ├─ Group/
│  │  └─ GroupTripPage.tsx
│  ├─ Auth/
│  │  ├─ SignInPage.tsx
│  │  └─ SignUpPage.tsx
│  └─ NotFoundPage.tsx
│
├─ features/
│  ├─ explore/
│  │  ├─ components/
│  │  │  ├─ SearchBar.tsx
│  │  │  ├─ DestinationCard.tsx
│  │  │  └─ MapView.tsx
│  │  ├─ hooks/
│  │  │  └─ useDestinations.ts
│  │  └─ api/
│  │     └─ geodb.ts
│  │
│  ├─ planner/
│  │  ├─ components/
│  │  │  ├─ TripForm.tsx
│  │  │  ├─ ItineraryDay.tsx
│  │  │  └─ ItineraryEditor.tsx
│  │  ├─ hooks/
│  │  │  └─ useItinerary.ts
│  │  └─ utils/
│  │     └─ dateRanges.ts
│  │
│  ├─ trips/
│  │  ├─ components/
│  │  │  ├─ TripCard.tsx
│  │  │  └─ TripList.tsx
│  │  ├─ store/
│  │  │  └─ tripsSlice.ts
│  │  └─ hooks/
│  │     └─ useTrips.ts
│  │
│  ├─ chat/
│  │  ├─ components/
│  │  │  ├─ AIAsk.tsx
│  │  │  └─ ChatThread.tsx
│  │  └─ store/
│  │     └─ chatSlice.ts
│  │
│  ├─ group/
│  │  ├─ components/
│  │  │  ├─ Collaborators.tsx
│  │  │  └─ SharedChecklist.tsx
│  │  └─ store/
│  │     └─ groupSlice.ts
│  │
│  ├─ organizer/
│  │  ├─ components/
│  │  │  ├─ UploadBox.tsx
│  │  │  └─ TicketCard.tsx
│  │  └─ store/
│  │     └─ filesSlice.ts
│  │
│  └─ widgets/
│     ├─ WeatherWidget.tsx
│     ├─ CurrencyWidget.tsx
│     └─ VisaChecker.tsx
│
├─ components/
│  ├─ ui/
│  │  ├─ Button.tsx
│  │  ├─ Input.tsx
│  │  ├─ Select.tsx
│  │  ├─ Modal.tsx
│  │  └─ Tabs.tsx
│  └─ common/
│     ├─ EmptyState.tsx
│     ├─ ErrorState.tsx
│     └─ Spinner.tsx
│
├─ store/
│  ├─ index.ts
│  ├─ hooks.ts
│  └─ slices/
│     ├─ authSlice.ts
│     └─ uiSlice.ts
│
├─ services/
│  ├─ ai/
│  │  ├─ openaiClient.ts
│  │  ├─ geminiClient.ts
│  │  └─ aiGateway.ts
│  ├─ maps/
│  │  ├─ leafletClient.ts
│  │  └─ googleMapsClient.ts
│  ├─ firebase.ts
│  ├─ cloudinary.ts
│  └─ http.ts
│
├─ hooks/
│  ├─ useAuth.ts
│  ├─ useDebounce.ts
│  ├─ useQueryParam.ts
│  └─ useDarkMode.ts
│
├─ styles/
│  └─ tailwind.css
├─ types/
│  ├─ trip.ts
│  └─ index.ts
└─ utils/
   ├─ currency.ts
   ├─ geoutils.ts
   └─ validation.ts
