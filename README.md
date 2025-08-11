-use command npx create-react-app my-project
-install tailwind css for create-react-app

Planning website
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
├─ pages/                     # route-level entry components (thin; delegate to features)
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
├─ features/                  # feature slices = UI + state + hooks together
│  ├─ explore/
│  │  ├─ components/
│  │  │  ├─ SearchBar.tsx
│  │  │  ├─ DestinationCard.tsx
│  │  │  └─ MapView.tsx       # Leaflet/GoogleMaps switch via props
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
│  │  │  └─ tripsSlice.ts     # RTK slice for trips (CRUD)
│  │  └─ hooks/
│  │     └─ useTrips.ts
│  │
│  ├─ chat/
│  │  ├─ components/
│  │  │  ├─ AIAsk.tsx         # “Ask AI” composer
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
│  │  │  ├─ UploadBox.tsx     # Cloudinary/Firebase storage
│  │  │  └─ TicketCard.tsx
│  │  └─ store/
│  │     └─ filesSlice.ts
│  │
│  └─ widgets/                # bonus: pluggable mini-widgets
│     ├─ WeatherWidget.tsx
│     ├─ CurrencyWidget.tsx
│     └─ VisaChecker.tsx
│
├─ components/                # shared, reusable UI (atoms/molecules)
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
│  ├─ index.ts                # configureStore, middleware
│  ├─ hooks.ts
│  └─ slices/
│     ├─ authSlice.ts
│     └─ uiSlice.ts           # theme, toasts, dialogs
│
├─ services/                  # external SDKs and adapters
│  ├─ ai/
│  │  ├─ openaiClient.ts      # provider driver
│  │  ├─ geminiClient.ts
│  │  └─ aiGateway.ts         # single function/shape consumed by UI
│  ├─ maps/
│  │  ├─ leafletClient.ts
│  │  └─ googleMapsClient.ts
│  ├─ firebase.ts
│  ├─ cloudinary.ts
│  └─ http.ts                 # fetch wrapper with interceptors
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
│  ├─ trip.ts                 # Trip, Itinerary, Place, Budget types
│  └─ index.ts
└─ utils/
├─ currency.ts
├─ geoutils.ts
└─ validation.ts
