import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid';

export default function ClozeForm() {
    return (
        <>
            <div className="my-10 relative max-w-lg mx-auto border rounded border-indigo-400 p-5 m">
                <div className="flex ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 me-2 cursor-grabbing">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                    <h2 className="text-base font-semibold leading-7 text-gray-900">Cloze Question</h2>

                </div>
                <div className=" border-t grid gap-y-2 border-gray-900/10 mt-2 py-4 row">
                    <div className="col-span-full">
                        <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                            Preview
                        </label>
                        <div className="mt-2">
                            <div className="flex rounded shadow-sm  ">
                                <input
                                    type="text"
                                    name="username"
                                    id="username"
                                    autoComplete="username"
                                    className="block flex-1 border-0 bg-transparent outline-0 py-1.5 pl-2 text-gray-900 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                                    placeholder="___ is best country in the world? "
                                    disabled
                                />
                            </div>
                        </div>
                    </div>


                    <div className="col-span-full ">

                        <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                            Sentence*
                        </label>
                        <div className="mt-2 ">

                            <div className="flex rounded shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 ">
                                <input
                                    type="text"
                                    name="username"
                                    id="username"
                                    autoComplete="username"
                                    className="block flex-1 outline-0 border-0 bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                    placeholder="janesmith"
                                />
                            </div>
                        </div>
                    </div>
                    <div className=" mt-2">

                    <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                          Options
                        </label>
                        <div className="mt-2 flex items-center ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 cursor-grabbing me-2 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                                </svg>
                                <div class="flex">
                                    <input id="candidates" name="candidates" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600 me-2 " />
                                </div>
                                <input
                                    type="text"
                                    name="first-name"
                                    id="first-name"
                                    autoComplete="given-name"
                                    className="block w-full rounded-md border-0 outline-0 p-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ms-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>


                            </div>

                        <h5 class="text-indigo-600 font-semibold mt-2 text-sm leading-6 cursor-pointer ">+ Add New Option</h5>
                    </div>


                    <div className="col-span-full">
                        <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                            Upload Image
                        </label>
                        <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-2 py-2">
                            <div className="text-center">
                                <PhotoIcon className="mx-auto h-8 w-8 text-gray-300" aria-hidden="true" />
                                <div className="mt-2 flex text-sm leading-6 text-gray-600">
                                    <label
                                        htmlFor="file-upload"
                                        className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                    >
                                        <span>Upload a file</span>
                                        <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                    </label>
                                    <p className="pl-1">or drag and drop</p>
                                </div>
                                <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" flex items-center justify-start gap-x-6">
                 
                    <button to="/Home"
                        type="submit"
                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Save
                    </button>
                </div>
            </div>


        </>

    )
}