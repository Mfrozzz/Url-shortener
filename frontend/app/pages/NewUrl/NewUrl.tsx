import FormUrl from "~/components/Form/FormUrl";
import NavBar from "~/components/NavBar/NavBar";

export default function NewUrl() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-200 via-blue-100 to-blue-300">
            <NavBar />
            <div className="relative isolate px-6 pt-14 lg:px-8">
                <div
                    aria-hidden="true"
                    className="absolute inset-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                >
                    <div
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    />
                </div>
                <div className="py-16">
                    <h1 className="text-4xl font-extrabold text-center text-blue-800 mb-4 drop-shadow">
                        Url Shortener
                    </h1>
                    <p className="text-center text-lg text-gray-700 mb-10">
                        Put your long link below and generate a short version to share easily!
                    </p>
                    <FormUrl />
                </div>
            </div>
        </div>
    );
}