import React, { useRef, useState } from "react";
import { BsPersonFill } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
import { HiLockClosed } from "react-icons/hi";
import Link from "next/link";

const Signup = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const nameRef = useRef();
	const emailRef = useRef();
	const passwordRef = useRef();
	const confirmPasswordRef = useRef();

	// submit user information for signup
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (passwordRef.current.value !== confirmPasswordRef.current.value) {
			return setError("Password do not match!");
		}
		try {
			setError("");
			setLoading(true);
			const newUser = {
				name: nameRef.current.value,
				email: emailRef.current.value,
				password: passwordRef.current.value,
			};
			console.log(newUser);
		} catch (err) {
			setError(err.message);
		}
		setLoading(false);
	};

	return (
		<div className="md:pt-20 pt-32 pb-16 bg-gradient-to-r from-gray-200 via-indigo-50 to-pink-50">
			<div className="mx-4 md:mx-16 md:grid place-items-center grid-cols-2">
				<div className="hidden md:block">
					<img src="/assets/auth-bg.svg" alt="Auth-page-reading-book" />
				</div>
				<div className="md:w-4/5 w-full bg-white shadow-md p-5 rounded">
					<h1 className="mb-5 text-3xl text-indigo-900 font-semibold text-center">
						Sign in
					</h1>
					<div className="text-md text-red-600 font-semibold">{error}</div>
					<form onSubmit={handleSubmit}>
						{/* name field */}
						<div className="my-4 flex items-center border border-gray-300 text-indigo-900 p-2 rounded">
							<BsPersonFill className="mr-1" size="1.2rem" />
							<input
								type="text"
								ref={nameRef}
								placeholder="Enter name"
								className="text-lg text-indigo-900 outline-none flex-1"
							/>
						</div>
						{/* email field */}
						<div className="my-4 flex items-center border border-gray-300 text-indigo-900 p-2 rounded">
							<div className="mr-1 text-indigo-900 font-bold text-xl">@</div>
							<input
								type="email"
								ref={emailRef}
								placeholder="Enter email"
								className="text-lg text-indigo-900 outline-none flex-1"
								required
							/>
						</div>
						{/* password field */}
						<div className="my-4 flex items-center border border-gray-300 text-indigo-900 p-2 rounded">
							<HiLockClosed className="mr-1" size="1.2rem" />
							<input
								type="password"
								ref={passwordRef}
								placeholder="Enter Password"
								className="text-lg text-indigo-900 outline-none flex-1"
								required
							/>
						</div>
						{/* confirm password field */}
						<div className="my-4 flex items-center border border-gray-300 text-indigo-900 p-2 rounded">
							<HiLockClosed className="mr-1" size="1.2rem" />
							<input
								type="password"
								ref={confirmPasswordRef}
								placeholder="Confirm Password"
								className="text-lg text-indigo-900 outline-none flex-1"
								required
							/>
						</div>
						<div className="my-4 w-full bg-indigo-900 text-center hover:ring-2 ring-indigo-400 rounded">
							<input
								type="submit"
								disabled={loading}
								value="Sign Up"
								className="bg-indigo-900 text-white text-lg font-semibold p-2 "
							/>
						</div>
					</form>
					<div className="flex justify-between">
						<p className="text-indigo-900 text-md">Already have an account ?</p>
						<Link href="/login">
							<a>
								<button className="text-indigo-900 text-md hover:font-bold">
									Login
								</button>
							</a>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Signup;