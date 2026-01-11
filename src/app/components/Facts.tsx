"use client";

import React from "react";
import Link from "next/link";

const FACTS = [
	{ label: "Active Members", value: "60+" },
	{ label: "Nationalities", value: "15+" },
	{ label: "Sub-Teams", value: "5" },
	{ label: "Majors Represented", value: "12+" },
];

const Facts: React.FC = () => {
	const brightBlue = "#105fdfff";
	const darkBlue = "var(--foreground)";

	return (
		<section
			style={{
				width: "100%",
				height: "100%", // Fill the parent snap container
				padding: "4rem 2rem",
				background: "var(--background)",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<div style={{ width: "100%", maxWidth: "1200px" }}>
				{/* Header Text with Vertical Bar */}
				<div
					style={{
						borderLeft: `4px solid ${darkBlue}`,
						paddingLeft: "2rem",
						marginBottom: "4rem",
					}}
				>
					<h2
						style={{
							textAlign: "left",
							fontSize: "clamp(2rem, 4vw, 3.5rem)",
							fontWeight: 600,
							color: darkBlue,
							lineHeight: 1.2,
							margin: 0,
						}}
					>
						We work at the intersection of{" "}
						<span style={{ color: brightBlue }}>Neuroscience</span>,{" "}
						<span style={{ color: brightBlue }}>Electrical Engineering</span>{" "}
						and <span style={{ color: brightBlue }}>Robotics</span>.
						<br />
						<br />
						Do you want to learn more about our{" "}
						<Link
							href="/research"
							style={{
								color: brightBlue,
								textDecoration: "underline",
								cursor: "pointer",
							}}
						>
							Research
						</Link>
						?
					</h2>
				</div>

				{/* Facts Grid */}
				<div
					style={{
						display: "grid",
						gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
						gap: "2rem",
						width: "100%",
					}}
				>
					{FACTS.map((fact, index) => (
						<div
							key={index}
							style={{
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								justifyContent: "center",
								padding: "2rem",
								border: "1px solid var(--foreground)",
								borderRadius: "12px",
								textAlign: "center",
								transition:
									"transform 0.2s ease, box-shadow 0.2s ease",
								cursor: "default",
							}}
							onMouseEnter={(e) => {
								e.currentTarget.style.transform = "translateY(-5px)";
								e.currentTarget.style.boxShadow =
									"0 10px 20px rgba(0,0,0,0.1)";
							}}
							onMouseLeave={(e) => {
								e.currentTarget.style.transform = "translateY(0)";
								e.currentTarget.style.boxShadow = "none";
							}}
						>
							<span
								style={{
									fontSize: "3rem",
									fontWeight: "700",
									color: "var(--foreground)",
									marginBottom: "0.5rem",
									lineHeight: 1,
								}}
							>
								{fact.value}
							</span>
							<span
								style={{
									fontSize: "1.1rem",
									color: "var(--foreground)",
									opacity: 0.8,
									fontWeight: "500",
								}}
							>
								{fact.label}
							</span>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Facts;