import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { AiOutlineTeam } from "react-icons/ai";
import * as Yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import { GiTrophyCup } from "react-icons/gi";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { useGetTournamentDetailsQuery } from "../../../services/tournament";
import { useGetuserTeamsQuery } from "../../../services/team";
import Loader from "../../../component/Loader";

function TeamRegister() {
  const navigate = useNavigate();
  let userId = 1;
  const { tournament_id } = useParams();
  const { data, isLoading, isSuccess, error, refetch } =
    useGetTournamentDetailsQuery(tournament_id);

  const teamData = useGetuserTeamsQuery({ userId });
  // console.log("team data", teamData);
  const tournamentDetails = data?.tournamentDetails;
  const [Teams, setTeam] = React.useState([]);
  const [TeamPlayers, setTeamPlayers] = React.useState("");

  const [isTeamSelect, setisTeamSelect] = React.useState(true);
  const [selectedTeam, setSelectedTeam] = React.useState(0);
  const allteams = [
    {
      team_id: 1001,
      team_logo: "/CBL_Images/basketball_team_logo_1.webp",
      team_name: "Mehta Ke Mahaarathi",
      players: [
        {
          id: 1,
          name: "Sadikali karadiya",
          position: "point guard",
          age: 24,
          jersey_no: 10,
        },
        {
          id: 2,
          name: "Deepak Prajapati",
          position: "center",
          age: 26,
          jersey_no: 11,
        },
        {
          id: 1,
          name: "Sadikali karadiya",
          position: "point guard",
          age: 25,
          jersey_no: 12,
        },
        {
          id: 2,
          name: "Deepak Prajapati",
          position: "center",
          age: 22,
          jersey_no: 13,
        },
        {
          id: 1,
          name: "Sadikali karadiya",
          position: "point guard",
          age: 22,
          jersey_no: 14,
        },
        {
          id: 2,
          name: "Deepak Prajapati",
          position: "center",
          age: 23,
          jersey_no: 15,
        },
      ],
    },
    {
      team_id: 1002,
      team_logo: "/CBL_Images/basketball_team_logo_1.webp",
      team_name: "Mehta Ke Mahaarathi",
      players: [
        {
          id: 1,
          name: "Sadikali karadiya",
          position: "point guard",
          age: 24,
          jersey_no: 10,
        },
        {
          id: 2,
          name: "Deepak Prajapati",
          position: "center",
          age: 26,
          jersey_no: 11,
        },
        {
          id: 1,
          name: "Sadikali karadiya",
          position: "point guard",
          age: 25,
          jersey_no: 12,
        },
        {
          id: 2,
          name: "Deepak Prajapati",
          position: "center",
          age: 22,
          jersey_no: 13,
        },
      ],
    },
    {
      team_id: 1003,
      team_logo: "/CBL_Images/basketball_team_logo_1.webp",
      team_name: "Mehta Ke Mahaarathi",
      players: [
        {
          id: 1,
          name: "Sadikali karadiya",
          position: "point guard",
          age: 24,
          jersey_no: 10,
        },
        {
          id: 2,
          name: "Deepak Prajapati",
          position: "center",
          age: 26,
          jersey_no: 11,
        },
        {
          id: 3,
          name: "Sadikali karadiya",
          position: "point guard",
          age: 25,
          jersey_no: 12,
        },
      ],
    },
  ];

  useEffect(() => {
    setTeam(allteams);
  }, []);

  const handleSelectPlayer = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const checked = e.target.checked;
    if (name === "AllSelect") {
      let AllPlayers = TeamPlayers.map((player) => {
        return { ...player, isChecked: checked };
      });
      setTeamPlayers(AllPlayers);
    } else {
      let AllPlayers = TeamPlayers.map((player) =>
        player.id == value ? { ...player, isChecked: checked } : player
      );
      setTeamPlayers(AllPlayers);
      let SelectedPlayer = AllPlayers.filter((AllPlayers) => {
        return AllPlayers.isChecked == true;
      });
    }
  };

  // ------------ Form Validation ------------
  const initialValues = {
    tournament_category: [],
    age_cutoff: [],
  };
  const validationSchema = Yup.object({
    tournament_category: Yup.array().min(1),
    age_cutoff: Yup.array().min(1),
  });

  const {
    values,
    errors,
    touched,
    isSubmitting,
    resetForm,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    validationSchema,
    initialValues,
    onSubmit: (data) => {
      // ---------------- Confirmation for update -----------------------

      // console.log("Click ho ra h he");
      console.log("data", {
        ...data,
        tournament_id: tournamentDetails.id,
        team_id: selectedTeam,
      });
    },
  });

  React.useEffect(() => {
    const team = teamData?.data?.data.find((team) => {
      return team.id == selectedTeam;
    });
  }, [selectedTeam]);
  // console.log(tournamentDetails);
  return (
    <section className="min-h-screen">
      {isLoading && <Loader />}
      {isSuccess && (
        <div className="mx-auto px-10 py-5 sm:px-20 sm:py-12 md:px-20 md:py-10 lg:px-24 xl:px-28 2xl:px-32">
          <div className="flex justify-center items-center py-5 ">
            <GiTrophyCup className="text-3xl xs:text-5xl  lg:text-7xl  text-[#ee6730] mr-2" />
            <p className="text-base xs:text-xl sm:text-2xl lg:text-4xl  font-bold text-black ">
              {tournamentDetails?.tournament_name}
            </p>
          </div>
          <div className="py-5 w-full">
            <h1 className="font-semibold text-lg md:text-xl lg:text-2xl ">
              Select Team <span className="text-red-600 font-bold">*</span>
            </h1>
            <div className=" py-2 rounded-md  ">
              <div className="overflow-x-auto space-x-10 overflow-hidden flex items-center md:px-5">
                {teamData?.data?.data.length > 0 ? (
                  teamData?.data?.data.map((team, index) => {
                    return (
                      <div
                        key={index}
                        id={team.id}
                        onClick={(e) => setSelectedTeam(() => team?.id)}
                        className={` ${
                          team.id == selectedTeam
                            ? "bg-[#ee6730] text-white"
                            : "bg-white"
                        } flex items-center xl:w-1/4 2xl:w-1/5 space-x-5 xl:space-x-2 justify-start font-normal px-5 py-5 lg:py-6 
                          rounded-lg cursor-pointer bg-white hover:scale-105 duration-300 shadow-md my-3`}
                      >
                        <div className="w-16  lg:w-20 flex justify-center items-center">
                          <img
                            src={team.logo}
                            alt=""
                            className="rounded-full border-[3px] border-gray-500 shadow-sm md:w-14 md:h-14 object-contain"
                          />
                        </div>
                        <p className="text-start font-semibold text-sm md:text-base  2xl:text-[17px] ">
                          {team.team_name}
                        </p>
                      </div>
                    );
                  })
                ) : (
                  <div className="flex justify-center w-full items-center mt-16 md:mt-24">
                    <AiOutlineTeam className="text-2xl xs:text-3xl sm:text-5xl text-gray-400 mr-2" />
                    <p className="text-xs xs:text-sm sm:text-lg font-medium text-gray-400">
                      Team Not Found
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <form action="" onSubmit={handleSubmit}>
            <div className="flex flex-col sm:flex-row lg:flex-col sm:space-x-10 lg:space-x-0 items-center py-5 xl:mt-10">
              <div className="flex flex-col px-2 rounded-md w-full">
                <label className="mb-2 text-lg md:text-xl lg:text-2xl text-start font-semibold">
                  Select Category{" "}
                  <span className="text-red-600 font-bold">*</span>
                </label>
                <div className="grid grid-rows md:grid-flow-row lg:grid-cols-3 gap-5 py-2 ">
                  {tournamentDetails?.gender_types?.length > 0 ? (
                    tournamentDetails.gender_types.map((category, index) => {
                      return (
                        <div
                          key={index}
                          htmlFor={category}
                          className="flex bg-gray-200 hover:shadow-md px-5  py-3 rounded-md shadow-sm w-full flex-row  items-center space-x-3"
                        >
                          <input
                            type="checkbox"
                            name={"tournament_category"}
                            id={category}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={category}
                            className="cursor-pointer"
                          />
                          <label
                            htmlFor={category}
                            className="text-sm xl:text-base cursor-pointer "
                          >
                            {category}
                          </label>
                        </div>
                      );
                    })
                  ) : (
                    <div className=""> No category Available</div>
                  )}
                </div>
                {errors.tournament_category && touched.tournament_category ? (
                  <small className="text-red-600 mt-2">
                    {errors.tournament_category}
                  </small>
                ) : null}
              </div>
              <div className="flex flex-col px-2 rounded-md w-full py-4">
                <label className="mb-2 text-lg md:text-xl lg:text-2xl text-start font-semibold">
                  Select Age Cutoff{" "}
                  <span className="text-red-600 font-bold">*</span>
                </label>
                <div className=" rounded-md ">
                  <div className="grid grid-rows md:grid-flow-row lg:grid-cols-3 gap-5 py-2 ">
                    {tournamentDetails?.age_categories.length > 0
                      ? tournamentDetails?.age_categories.map(
                          (age_cutoff, index) => {
                            return (
                              <div
                                key={index}
                                className="flex bg-gray-200 hover:shadow-md px-5 py-3 rounded-md shadow-sm w-full items-center space-x-3"
                              >
                                <input
                                  type="checkbox"
                                  name={"age_cutoff"}
                                  id={age_cutoff}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={age_cutoff}
                                  className="cursor-pointer"
                                />
                                <label
                                  htmlFor={age_cutoff}
                                  className="text-sm xl:text-base cursor-pointer "
                                >
                                  {age_cutoff.split("_").join(" ")}
                                </label>
                              </div>
                            );
                          }
                        )
                      : "No age cut off Available"}
                  </div>
                </div>
                {errors.age_cutoff && touched.age_cutoff ? (
                  <small className="text-red-600 mt-2">
                    {errors.age_cutoff}
                  </small>
                ) : null}
              </div>
            </div>

            {selectedTeam != 0 ? (
              <div className="flex justify-center md:justify-end md:items-end w-full space-x-5 py-3 md:py-3 ">
                <button
                  className="bg-slate-900 relative inline-flex items-center justify-center md:px-6 py-2 px-4  overflow-hidden text-white rounded-lg cursor-pointer group"
                  onClick={() => navigate(-1)}
                >
                  <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#ee6730] rounded-lg group-hover:w-full group-hover:h-56"></span>
                  <span className="relative text-sm xl:text-base">Cancle</span>
                </button>
                <button
                  type="submit"
                  className="bg-[#ee6730] relative inline-flex items-center justify-center md:px-6 py-2 px-4  overflow-hidden text-white rounded-lg cursor-pointer group"
                  onClick={(e) => handleSubmit()}
                  // onClick={(e) => console.log("clicked")}
                >
                  <span className="absolute w-0 h-0 transition-all duration-500 ease-out  bg-slate-900 rounded-lg group-hover:w-full group-hover:h-56"></span>
                  <span className="relative text-sm xl:text-base">SUBMIT</span>
                </button>
              </div>
            ) : null}
          </form>
        </div>
      )}
    </section>
  );
}

export default TeamRegister;
