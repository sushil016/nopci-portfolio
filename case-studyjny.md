Designing a Dual-Model E-commerce Platform for Individuals & Residential Societies

Tech: Next.js, Node.js, PostgreSQL, Razorpay, Tailwind CSS, META Api, Google Cloud Platform (GCP)
Section
#01
Problem Statement
Traditional e-commerce platforms are not built for recurring household needs or society-based ordering. Jain & Iyer required a system that could support both instant individual purchases and scheduled society-level ordering with grouped society-wise deliveries as per schedule, while maintaining efficiency, automation, and full administrative control—without relying on slow or rigid off-the-shelf solutions.

Section
#02
1. Understanding the Business Reality
Jain & Iyer is a high-end e-commerce brand and Manufacturer of Authentic Food Batters (Idli, dosa, Vada) Flours (Refer Product List) Instant Pre-Mixes (Refer Product List) All our Products are Preservatives and Chemical Free. The business operates in two distinct ways: individual customers who order anytime, and residential societies that prefer fixed weekly delivery schedules. The real challenge was translating these real-world buying behaviors into a single, scalable digital platform.

Section
#03
2. Defining the Dual Ordering Model
To keep the system clear and scalable, the platform was designed around two independent ordering models:

Individual Model: Customers can place orders anytime with standard doorstep delivery.
Society Model: Orders are placed under a society with predefined delivery days (1–2 days per week), enabling group benefits and coordinated deliveries.
Section
#04
3. Planning Before Designing
Before starting UI design, the entire business logic was mapped out:

Each society has specific delivery days and cut-off times
Orders placed after the cut-off automatically move to the next valid delivery date
Admins must be able to override schedules without affecting existing orders
Society orders must be grouped for delivery efficiency
Section
#05
4. UX Strategy & Wireframing
User journeys were designed separately for individual buyers, society buyers, and admins. The UX focus was on clarity, speed, and repeat usage.

Clear separation between society and individual ordering
Mobile-first design for frequent customers
Minimal checkout steps for recurring orders
Transparent communication of delivery dates and scheduling
Section
#06
5. Automated Delivery Scheduling System
The core innovation of the platform is its automated delivery engine. The system dynamically validates delivery availability based on society rules and automatically reschedules orders placed outside allowed windows. Orders are grouped society-wise to simplify delivery planning and reduce operational effort.

This automation removes manual coordination while keeping the system flexible.

Section
#07
6. Admin Control & Multi-Role Access
The platform includes a robust admin system with multi-role access.

Admins can:

Create and manage societies
Define delivery days and cut-off times
Override delivery schedules when required
Manage inventory and products
View and process society-wise grouped orders
Section
#08
7. Technology & Performance Focus
The platform was built with performance and scalability in mind.

Tech Stack:

Frontend: Next.js
Backend: Node.js
Database: PostgreSQL
Payments: Razorpay
Styling: Tailwind CSS
SMS/Notifications: META Api
Hosting: Google Cloud Platform (GCP)
Section
#09
8. Outcome & Impact
The final system enables effortless recurring ordering for both individuals and residential societies. It reduces operational complexity, improves delivery efficiency, and provides a scalable foundation for future growth.

This project demonstrates the ability to translate complex business rules into a clean, high-performance, production-ready full-stack solution.