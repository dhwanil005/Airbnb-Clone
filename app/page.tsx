import Image from "next/image";
import ClientOnly from "./components/ClientOnly";
import Container from "./components/Container";
import EmptyState from "./components/EmptyState";
import getListings, { IListingsParams } from "./actions/getListings";
import ListingCard from "./components/listings/ListingCard";
import getCurrentUser from "./actions/getCurrentUser";

interface HomeProps {
  searchParams: IListingsParams;
}

const Home = async ({ searchParams }: HomeProps) => {
  const currentUser = await getCurrentUser();
  const listings = await getListings(searchParams);

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState showReset />
      </ClientOnly>
    );
  }
  return (
    <ClientOnly>
      <Container>
        <div className="pt-24 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
          <div>
            {listings.map((listing) => {
              return (
                <ListingCard
                  currentUser={currentUser}
                  key={listing.id}
                  data={listing}
                />
              );
            })}
          </div>
        </div>
      </Container>
    </ClientOnly>
  );
};

export default Home;
